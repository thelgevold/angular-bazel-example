
import { Cmp7609Component } from './cmp';
describe('Cmp7609Component', () => {
  it('should add', () => {
    expect(new Cmp7609Component().add7609(1)).toBe(7610);
  });
});