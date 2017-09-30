
import { Cmp7250Component } from './cmp';
describe('Cmp7250Component', () => {
  it('should add', () => {
    expect(new Cmp7250Component().add7250(1)).toBe(7251);
  });
});