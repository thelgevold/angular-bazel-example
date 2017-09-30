
import { Cmp9688Component } from './cmp';
describe('Cmp9688Component', () => {
  it('should add', () => {
    expect(new Cmp9688Component().add9688(1)).toBe(9689);
  });
});