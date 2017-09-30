
import { Cmp7095Component } from './cmp';
describe('Cmp7095Component', () => {
  it('should add', () => {
    expect(new Cmp7095Component().add7095(1)).toBe(7096);
  });
});