
import { Cmp6073Component } from './cmp';
describe('Cmp6073Component', () => {
  it('should add', () => {
    expect(new Cmp6073Component().add6073(1)).toBe(6074);
  });
});