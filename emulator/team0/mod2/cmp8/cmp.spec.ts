
import { Cmp4028Component } from './cmp';
describe('Cmp4028Component', () => {
  it('should add', () => {
    expect(new Cmp4028Component().add4028(1)).toBe(4029);
  });
});