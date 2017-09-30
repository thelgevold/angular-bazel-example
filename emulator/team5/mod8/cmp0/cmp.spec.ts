
import { Cmp4580Component } from './cmp';
describe('Cmp4580Component', () => {
  it('should add', () => {
    expect(new Cmp4580Component().add4580(1)).toBe(4581);
  });
});