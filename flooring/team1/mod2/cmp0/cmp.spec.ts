
import { Cmp5120Component } from './cmp';
describe('Cmp5120Component', () => {
  it('should add', () => {
    expect(new Cmp5120Component().add5120(1)).toBe(5121);
  });
});