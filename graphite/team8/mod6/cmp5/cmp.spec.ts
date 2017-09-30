
import { Cmp6865Component } from './cmp';
describe('Cmp6865Component', () => {
  it('should add', () => {
    expect(new Cmp6865Component().add6865(1)).toBe(6866);
  });
});