
import { Cmp5211Component } from './cmp';
describe('Cmp5211Component', () => {
  it('should add', () => {
    expect(new Cmp5211Component().add5211(1)).toBe(5212);
  });
});