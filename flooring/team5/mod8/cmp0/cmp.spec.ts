
import { Cmp5580Component } from './cmp';
describe('Cmp5580Component', () => {
  it('should add', () => {
    expect(new Cmp5580Component().add5580(1)).toBe(5581);
  });
});