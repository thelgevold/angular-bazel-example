
import { Cmp6911Component } from './cmp';
describe('Cmp6911Component', () => {
  it('should add', () => {
    expect(new Cmp6911Component().add6911(1)).toBe(6912);
  });
});