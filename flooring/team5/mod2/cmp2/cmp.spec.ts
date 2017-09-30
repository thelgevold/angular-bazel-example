
import { Cmp5522Component } from './cmp';
describe('Cmp5522Component', () => {
  it('should add', () => {
    expect(new Cmp5522Component().add5522(1)).toBe(5523);
  });
});