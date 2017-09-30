
import { Cmp7098Component } from './cmp';
describe('Cmp7098Component', () => {
  it('should add', () => {
    expect(new Cmp7098Component().add7098(1)).toBe(7099);
  });
});