
import { Cmp7752Component } from './cmp';
describe('Cmp7752Component', () => {
  it('should add', () => {
    expect(new Cmp7752Component().add7752(1)).toBe(7753);
  });
});