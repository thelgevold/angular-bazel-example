
import { Cmp6044Component } from './cmp';
describe('Cmp6044Component', () => {
  it('should add', () => {
    expect(new Cmp6044Component().add6044(1)).toBe(6045);
  });
});