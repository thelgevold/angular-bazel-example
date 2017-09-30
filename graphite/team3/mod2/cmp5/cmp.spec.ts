
import { Cmp6325Component } from './cmp';
describe('Cmp6325Component', () => {
  it('should add', () => {
    expect(new Cmp6325Component().add6325(1)).toBe(6326);
  });
});