
import { Cmp9399Component } from './cmp';
describe('Cmp9399Component', () => {
  it('should add', () => {
    expect(new Cmp9399Component().add9399(1)).toBe(9400);
  });
});