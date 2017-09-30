
import { Cmp7580Component } from './cmp';
describe('Cmp7580Component', () => {
  it('should add', () => {
    expect(new Cmp7580Component().add7580(1)).toBe(7581);
  });
});