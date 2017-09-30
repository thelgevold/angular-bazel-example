
import { Cmp7903Component } from './cmp';
describe('Cmp7903Component', () => {
  it('should add', () => {
    expect(new Cmp7903Component().add7903(1)).toBe(7904);
  });
});