
import { Cmp7514Component } from './cmp';
describe('Cmp7514Component', () => {
  it('should add', () => {
    expect(new Cmp7514Component().add7514(1)).toBe(7515);
  });
});