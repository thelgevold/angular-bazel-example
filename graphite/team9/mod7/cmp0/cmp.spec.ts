
import { Cmp6970Component } from './cmp';
describe('Cmp6970Component', () => {
  it('should add', () => {
    expect(new Cmp6970Component().add6970(1)).toBe(6971);
  });
});