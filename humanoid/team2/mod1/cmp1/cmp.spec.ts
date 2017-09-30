
import { Cmp7211Component } from './cmp';
describe('Cmp7211Component', () => {
  it('should add', () => {
    expect(new Cmp7211Component().add7211(1)).toBe(7212);
  });
});