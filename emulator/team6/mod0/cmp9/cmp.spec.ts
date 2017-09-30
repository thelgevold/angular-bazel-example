
import { Cmp4609Component } from './cmp';
describe('Cmp4609Component', () => {
  it('should add', () => {
    expect(new Cmp4609Component().add4609(1)).toBe(4610);
  });
});