
import { Cmp5400Component } from './cmp';
describe('Cmp5400Component', () => {
  it('should add', () => {
    expect(new Cmp5400Component().add5400(1)).toBe(5401);
  });
});