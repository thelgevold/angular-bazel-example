
import { Cmp6809Component } from './cmp';
describe('Cmp6809Component', () => {
  it('should add', () => {
    expect(new Cmp6809Component().add6809(1)).toBe(6810);
  });
});