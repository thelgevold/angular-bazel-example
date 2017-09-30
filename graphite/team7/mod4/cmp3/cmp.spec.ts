
import { Cmp6743Component } from './cmp';
describe('Cmp6743Component', () => {
  it('should add', () => {
    expect(new Cmp6743Component().add6743(1)).toBe(6744);
  });
});