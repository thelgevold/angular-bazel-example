
import { Cmp7128Component } from './cmp';
describe('Cmp7128Component', () => {
  it('should add', () => {
    expect(new Cmp7128Component().add7128(1)).toBe(7129);
  });
});