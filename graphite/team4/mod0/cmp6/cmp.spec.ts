
import { Cmp6406Component } from './cmp';
describe('Cmp6406Component', () => {
  it('should add', () => {
    expect(new Cmp6406Component().add6406(1)).toBe(6407);
  });
});