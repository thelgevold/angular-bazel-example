
import { Cmp6361Component } from './cmp';
describe('Cmp6361Component', () => {
  it('should add', () => {
    expect(new Cmp6361Component().add6361(1)).toBe(6362);
  });
});