
import { Cmp7604Component } from './cmp';
describe('Cmp7604Component', () => {
  it('should add', () => {
    expect(new Cmp7604Component().add7604(1)).toBe(7605);
  });
});