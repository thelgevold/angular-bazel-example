
import { Cmp7825Component } from './cmp';
describe('Cmp7825Component', () => {
  it('should add', () => {
    expect(new Cmp7825Component().add7825(1)).toBe(7826);
  });
});