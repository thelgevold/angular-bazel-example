
import { Cmp3250Component } from './cmp';
describe('Cmp3250Component', () => {
  it('should add', () => {
    expect(new Cmp3250Component().add3250(1)).toBe(3251);
  });
});