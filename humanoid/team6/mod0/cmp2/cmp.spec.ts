
import { Cmp7602Component } from './cmp';
describe('Cmp7602Component', () => {
  it('should add', () => {
    expect(new Cmp7602Component().add7602(1)).toBe(7603);
  });
});