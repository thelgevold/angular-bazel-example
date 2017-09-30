
import { Cmp4643Component } from './cmp';
describe('Cmp4643Component', () => {
  it('should add', () => {
    expect(new Cmp4643Component().add4643(1)).toBe(4644);
  });
});