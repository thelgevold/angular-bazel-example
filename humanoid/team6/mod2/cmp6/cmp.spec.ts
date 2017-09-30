
import { Cmp7626Component } from './cmp';
describe('Cmp7626Component', () => {
  it('should add', () => {
    expect(new Cmp7626Component().add7626(1)).toBe(7627);
  });
});