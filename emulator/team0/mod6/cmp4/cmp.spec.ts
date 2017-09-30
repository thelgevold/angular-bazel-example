
import { Cmp4064Component } from './cmp';
describe('Cmp4064Component', () => {
  it('should add', () => {
    expect(new Cmp4064Component().add4064(1)).toBe(4065);
  });
});