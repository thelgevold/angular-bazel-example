
import { Cmp8209Component } from './cmp';
describe('Cmp8209Component', () => {
  it('should add', () => {
    expect(new Cmp8209Component().add8209(1)).toBe(8210);
  });
});