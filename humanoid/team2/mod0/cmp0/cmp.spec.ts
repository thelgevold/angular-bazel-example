
import { Cmp7200Component } from './cmp';
describe('Cmp7200Component', () => {
  it('should add', () => {
    expect(new Cmp7200Component().add7200(1)).toBe(7201);
  });
});