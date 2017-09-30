
import { Cmp5025Component } from './cmp';
describe('Cmp5025Component', () => {
  it('should add', () => {
    expect(new Cmp5025Component().add5025(1)).toBe(5026);
  });
});