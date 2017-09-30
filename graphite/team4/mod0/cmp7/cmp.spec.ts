
import { Cmp6407Component } from './cmp';
describe('Cmp6407Component', () => {
  it('should add', () => {
    expect(new Cmp6407Component().add6407(1)).toBe(6408);
  });
});