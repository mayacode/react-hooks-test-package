const { renderHook, act } = require('@testing-library/react-hooks');

const { useOpen } = require('../src/stateHooks');

describe('state hooks', () => {
  describe('useOpen function', () => {
    it('should return expected values', () => {
      const { result } = renderHook(() => useOpen());

      expect(result.current.opened).toEqual(false);
      expect(typeof result.current.setClose).toEqual('function');
      expect(typeof result.current.setOpen).toEqual('function');
      expect(typeof result.current.toggleOpen).toEqual('function');
    });

    const cases = [[true, 'ala'], [false, ''], [true, 1], [false, NaN], [false, null]];

    describe("state initial value", () => {
      it.each(cases)(
        "should be %p if hook was called with %p as argument",
        (expectedResult, arg) => {
          const { result } = renderHook(() => useOpen(arg));

          expect(result.current.opened).toEqual(expectedResult);
        }
      );
    });

    describe('setClose function', () => {
      it('should set state to false', () => {
        const { result } = renderHook(() => useOpen(true));

        expect(result.current.opened).toEqual(true);

        act(() => {
          result.current.setClose()
        });

        expect(result.current.opened).toEqual(false);
      });
    });

    describe('setOpen function', () => {
      it('should set state to true', () => {
        const { result } = renderHook(() => useOpen());

        expect(result.current.opened).toEqual(false);

        act(() => {
          result.current.setOpen()
        });

        expect(result.current.opened).toEqual(true);
      });
    });

    describe('toggleOpen function', () => {
      it('should toggle state value', () => {
        const { result } = renderHook(() => useOpen());

        expect(result.current.opened).toEqual(false);

        act(() => {
          result.current.toggleOpen()
        });

        expect(result.current.opened).toEqual(true);

        act(() => {
          result.current.toggleOpen()
        });

        expect(result.current.opened).toEqual(false);
      });
    });
  });
});