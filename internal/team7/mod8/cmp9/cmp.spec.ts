
import { Cmp8789Component } from './cmp';
describe('Cmp8789Component', () => {
  it('should add', () => {
    expect(new Cmp8789Component().add8789(1)).toBe(8790);
  });
});