
import { Cmp7559Component } from './cmp';
describe('Cmp7559Component', () => {
  it('should add', () => {
    expect(new Cmp7559Component().add7559(1)).toBe(7560);
  });
});