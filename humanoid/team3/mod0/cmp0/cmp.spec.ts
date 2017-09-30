
import { Cmp7300Component } from './cmp';
describe('Cmp7300Component', () => {
  it('should add', () => {
    expect(new Cmp7300Component().add7300(1)).toBe(7301);
  });
});