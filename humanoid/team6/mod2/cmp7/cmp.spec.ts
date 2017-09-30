
import { Cmp7627Component } from './cmp';
describe('Cmp7627Component', () => {
  it('should add', () => {
    expect(new Cmp7627Component().add7627(1)).toBe(7628);
  });
});