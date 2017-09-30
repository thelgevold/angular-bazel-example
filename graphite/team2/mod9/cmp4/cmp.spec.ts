
import { Cmp6294Component } from './cmp';
describe('Cmp6294Component', () => {
  it('should add', () => {
    expect(new Cmp6294Component().add6294(1)).toBe(6295);
  });
});