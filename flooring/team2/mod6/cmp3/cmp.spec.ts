
import { Cmp5263Component } from './cmp';
describe('Cmp5263Component', () => {
  it('should add', () => {
    expect(new Cmp5263Component().add5263(1)).toBe(5264);
  });
});