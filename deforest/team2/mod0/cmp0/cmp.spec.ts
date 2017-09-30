
import { Cmp3200Component } from './cmp';
describe('Cmp3200Component', () => {
  it('should add', () => {
    expect(new Cmp3200Component().add3200(1)).toBe(3201);
  });
});