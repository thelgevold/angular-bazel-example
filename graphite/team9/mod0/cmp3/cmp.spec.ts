
import { Cmp6903Component } from './cmp';
describe('Cmp6903Component', () => {
  it('should add', () => {
    expect(new Cmp6903Component().add6903(1)).toBe(6904);
  });
});