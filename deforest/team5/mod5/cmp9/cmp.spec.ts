
import { Cmp3559Component } from './cmp';
describe('Cmp3559Component', () => {
  it('should add', () => {
    expect(new Cmp3559Component().add3559(1)).toBe(3560);
  });
});