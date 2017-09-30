
import { Cmp9211Component } from './cmp';
describe('Cmp9211Component', () => {
  it('should add', () => {
    expect(new Cmp9211Component().add9211(1)).toBe(9212);
  });
});