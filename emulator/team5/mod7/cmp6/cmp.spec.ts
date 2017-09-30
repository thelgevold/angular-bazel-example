
import { Cmp4576Component } from './cmp';
describe('Cmp4576Component', () => {
  it('should add', () => {
    expect(new Cmp4576Component().add4576(1)).toBe(4577);
  });
});