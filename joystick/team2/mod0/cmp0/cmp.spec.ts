
import { Cmp9200Component } from './cmp';
describe('Cmp9200Component', () => {
  it('should add', () => {
    expect(new Cmp9200Component().add9200(1)).toBe(9201);
  });
});